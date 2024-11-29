const { response } = require('express');
const { sequelize2 } = require('../database');
const TruckMaster = require('../database/models/truckMasters');
const airlineBranch = require('../database/repository/airlineBranch');
const { Sarthi } = require('./../database/models/index');
module.exports = {
    create:
        async function createTruckAndSarthi(req, res, next) {
            try {
                const truckData = req.body.truck;
                const sarthiData = req.body.sarthi;

                // Check if truck number is passed in the payload
                if (!truckData || !truckData.truckNumber) {
                    return res.status(400).json({
                        success: false,
                        message: "Truck number is required."
                    });
                }

                if (!sarthiData || !sarthiData.truckNumber) {
                    return res.status(400).json({
                        success: false,
                        message: "Sarthi's truck number is required."
                    });
                }

                // 1. Check if the truck number already exists in TruckMaster
                const existingTruck = await TruckMaster.findOne({
                    where: {
                        truckNumber: truckData.truckNumber
                    }
                });

                if (existingTruck) {
                    return res.status(400).json({
                        success: false,
                        message: `Truck with truck number ${truckData.truckNumber} already exists!`
                    });
                }

                // 2. Check if the Sarthi is already linked to the truck number
                const existingSarthi = await Sarthi.findOne({
                    where: {
                        truckNumber: sarthiData.truckNumber
                    }
                });

                if (existingSarthi) {
                    return res.status(400).json({
                        success: false,
                        message: `Sarthi already assigned to truck number ${sarthiData.truckNumber}!`
                    });
                }

                // 3. Create the new Truck record
                const newTruck = await TruckMaster.create(truckData);
                // console.log('Created new truck:', newTruck);

                // 4. Link the new Sarthi to the created truck by assigning truckNumber
                sarthiData.truckNumber = newTruck.truckNumber; // Use the truckNumber from the newly created truck
                const newSarthi = await Sarthi.create(sarthiData);
                // console.log('Created new Sarthi:', newSarthi);

                // Return success response
                res.status(201).json({
                    success: true,
                    message: 'Truck and Sarthi created successfully!',
                    data: {
                        ...newTruck.get(), // Return the created truck data
                        sarthi: newSarthi.get() // Return the created sarthi data
                    }
                });

            } catch (error) {
                // console.error('Error creating truck and sarthi:', error);
                next(error); // Pass the error to the error-handling middleware
            }
        }

    ,
    getTruckDetailsWithSarthi: async function getTruck(req, res, next) {
     

        try {
            const truckNumber = req.params.truckNumber;

            // Fetch truck details
            const truckDetails = await TruckMaster.findOne({
                where: {
                    truckNumber: truckNumber
                }
            });

            // If truck doesn't exist
            if (!truckDetails) {
                return res.status(404).json({
                    success: false,
                    message: `Truck does not exist with truck number: ${truckNumber}`
                });
            }

            // Fetch Sarthi details for the truck
            const sarthi = await Sarthi.findAll({
                where: {
                    truckNumber: truckDetails.truckNumber // Assuming `truckId` in Sarthi refers to TruckMaster's `id`
                }
            });

            // Respond with truck and Sarthi details
            res.status(200).json({
                success: true,
                message: 'Truck and Sarthi fetched successfully!',
                data: {
                    truckDetails: truckDetails.get(), // Plain object
                    sarthis: sarthi.map((s) => s.get()) // Array of plain objects
                }
            });

        } catch (error) {
            // console.error('Error fetching truck and Sarthi details:', error);
            next(error); // Pass error to error-handling middleware
        }
    },
    addOnlySarthi:
        async function addSarthi(req, res, next) {
            // console.log('Calling addSarthi');
            try {
                const sarthiData = req.body;
                // console.log(sarthiData);

                // Check if the truck exists
                const existTruck = await TruckMaster.findOne({
                    where: {
                        truckNumber: sarthiData.truckNumber
                    }
                });
                // console.log(existTruck);

                if (!existTruck) {
                    return res.status(404).json({
                        success: false,
                        message: `Truck with ID ${sarthiData.truckNumber} does not exist. Please add the truck first.`
                    });
                }

                // Check if the driver is already associated with the truck
                const existDriver = await Sarthi.findOne({
                    where: {
                        truckNumber: sarthiData.truckNumber,
                        dlnumber: sarthiData.dlnumber
                    }
                });

                if (existDriver) {
                    return res.status(400).json({
                        success: false,
                        message: `Driver with DL number ${existDriver.dlnumber} is already associated with Truck ID ${sarthiData.truckNumber}.`
                    });
                }

                // Add new Sarthi to the truck
                const newSarthi = await Sarthi.create({
                    dlnumber: sarthiData.dlnumber,
                    dob: sarthiData.dob,
                    driverImageUrl: sarthiData.driverImageUrl,
                    dldetobj: sarthiData.dldetobj,
                    truckNumber: sarthiData.truckNumber
                });

                return res.status(201).json({
                    success: true,
                    message: `Sarthi successfully added for Truck ID ${sarthiData.truckNumber}.`,
                    data: newSarthi
                });
            } catch (error) {
                // console.error('Error adding Sarthi:', error);
                return res.status(500).json({
                    success: false,
                    message: 'An error occurred while adding Sarthi. Please try again later.',
                    error: error.message
                });
            }
        }
    ,
    getAllSarthiDetails:
        async function allSarthi(req,res,next){
            try {
                const allSarthi= await Sarthi.findAll()
                if(!allSarthi){
                    res.status(404).json({
                        success:true,
                        message:"Data Not Avalable!",
                        data:[]

                    })
                }
                else{
                    res.status(200).json({
                        success:true,
                        data:allSarthi,
                        message:"Data Avalable !"
                    })
                }  
            } catch (error) {
                
            }
        }



}