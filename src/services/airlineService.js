const airlineBranch = require('../database/repository/airlineBranch');
const { Airline, AirlineBranch, ContectPersion, VenderMail } = require('./../database/models/index');
module.exports = {
    create:
    async function createAirline(req, res, next) {
        try {
            const airlineData = req.body;
            const existingAirline= await Airline.findOne({
                where:{name:airlineData.name}
            })
            if(existingAirline){
                return res.status(400).json({
                    success:false,
                    message:"Airline Allready Exist!"
                })
            }
            if(airlineData.branches && airlineData.branches.length>0){
                for(let branch of airlineData.branches){
                 const existBranch=await AirlineBranch.findOne({
                    where:{branchName:branch.branchName}
                 })

                 if(existBranch){
                    return res.status(400).json({success:false,message:`Branches Name ${branch.branchName} all ready exist` })
                 }
                }
            }
            const newAirline = await Airline.create(airlineData, {
                include: [
                    {
                        model: AirlineBranch,
                        as: 'branches',
                        include: [
                            {
                                model: ContectPersion,
                                as: 'contactPersons',
                            },
                            {
                                model: VenderMail,
                                as: 'vendors',
                            },
                        ],
                    },
                ],
            });
    
            res.status(201).json({ success: true, message: 'Airline created successfully!', data: newAirline });
        } catch (error) {
            console.error('Error creating airline:', error);
            next(error); // Pass the error to the error-handling middleware
        }
    },

    getAllAirline: 
    async (req, res, next)=> {
        try {
            // Fetch all airlines with their associated branches, contact persons, and vendor mails
            const airlines = await Airline.findAll({
                include: [
                    {
                        model: AirlineBranch,
                        as: 'branches',
                        include: [
                            {
                                model: ContectPersion,
                                as: 'contactPersons',
                            },
                            {
                                model: VenderMail,
                                as: 'vendors',
                            },
                        ],
                    },
                ],
            });
    
            // Check if airlines data exists
            if (!airlines || airlines.length === 0) {
                return res.status(404).json({ success: false, message: 'No airlines found.' });
            }
    
            // Send the data in the response
            res.status(200).json({ success: true, data: airlines });
        } catch (error) {
            console.error('Error fetching airlines:', error);
            next(error); // Pass the error to the error-handling middleware
        }
    },

    addAirLineBranch:
    async (req, res, next) => {
        console.log('this is calling')
        try {
            const { airlineId, branchData } = req.body;
            
            // Log request body for debugging
            console.log('Received branch data:', branchData);
            
            const airline = await Airline.findByPk(airlineId);
            if (!airline) {
                return res.status(404).json({
                    success: false,
                    message: 'Airline not found',
                });
            }
    
            const existingBranch = await AirlineBranch.findOne({
                where: { branchName: branchData.branchName, airlineId },
            });
            if (existingBranch) {
                return res.status(400).json({
                    success: false,
                    message: 'Branch name must be unique for this airline.',
                });
            }
    
            // Create new branch
            const newBranch = await AirlineBranch.create({
                ...branchData,
                airlineId,
            });
    
            res.status(200).json({
                success: true,
                message: 'Branch added successfully to the airline!',
                data: newBranch,
            });
        } catch (error) {
            console.error('Error creating branch:', error); // Log the error
            res.status(500).json({
                success: false,
                message: 'Error while adding branch',
                error: error.message,
            });
        }
    },


    addVendorOfAirlineBranch:async (req, res) => {
    try {
        const { branchId, vendorData } = req.body;

        // Check if the branch exists
        const branch = await AirlineBranch.findByPk(branchId);
        if (!branch) {
            return res.status(404).json({
                success: false,
                message: 'Branch not found',
            });
        }

        // Create a new vendor and associate it with the branch
        const newVendor = await VenderMail.create({
            ...vendorData,
            branchId: branchId,  // This will link the vendor to the branch
        });

        // Send a success response
        res.status(201).json({
            success: true,
            message: 'Vendor added successfully to the branch',
            data: newVendor,
        });
    } catch (error) {
        console.error('Error adding vendor to branch:', error);
        res.status(500).json({
            success: false,
            message: 'Error adding vendor',
            error: error.message,
        });
    }
    },


    addBranchContectPersoname:async (req,res,next)=>{
        const {branchId,contectPersionNameData}= req.body;

        const existingBranch=  await AirlineBranch.findByPk(branchId);
        if(!existingBranch){
            res.status(404).json({
                success:false,
                message:'Branch Not exist!',

            })
        }

        const newContectPersionName = await ContectPersion.create({
            ...contectPersionNameData,
            branchId:branchId
        })
    },

    ///findOne///
     findOneByname: async (req,res,next)=>{
        const{name}=req.body

        const getData= await Airline.findOne({where:{
            name:name
        }, include: [
            {
                model: AirlineBranch, // Include AirlineBranch model
                as: 'branches' // Alias if you defined an alias in the association
            },
            
        ]})
        console.log(getData)
        if(!getData){
            res.status(404).json({
                message:"Data not available",
                success:false
            })
        }else{
            res.status(200).json({
                success:true,
                data:getData,
                message:"Data Available!"
            })
        }


    }


}