

const { airFreightRapository } = require("../database/repository/index");

module.exports = {
    create:async (req, res, next) => {
        try {
          const dataFromUser = req.body;         
          let createdFreightData = await airFreightRapository.addNewFreight(dataFromUser);
          
          // Check if creation was successful and send response
          if (createdFreightData) {
            return res.status(201).json({
              success: true,
              message: 'Air Freight data created successfully',
              data: createdFreightData
            });
          } else {
            return res.status(400).json({
              success: false,
              message: 'Failed to create Air Freight data'
            });
          }
        } catch (error) {
          // Handle errors properly
          console.error('Error creating Air Freight data:', error);
          return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
          });
        }
      },
    getAllAirFreight:async (req, res, next) => {
        try {
          const dataFromUser = req.body;
          
          // Create the new air freight data
          const createdFreightData = await airFreigh.create(dataFromUser);
          
          // Check if creation was successful and send response
          if (createdFreightData) {
            return res.status(201).json({
              success: true,
              message: 'Air Freight data created successfully',
              data: createdFreightData
            });
          } else {
            return res.status(400).json({
              success: false,
              message: 'Failed to create Air Freight data'
            });
          }
        } catch (error) {
          // Handle errors properly
          console.error('Error creating Air Freight data:', error);
          return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
          });
        }
      }  


}