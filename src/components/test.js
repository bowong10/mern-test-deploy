// load(
//     ri!reportedLossInfo: rule!CMP_getReportedLossDetailsByReportedLossNo(ri!lossNo),
//     a!dashboardLayout_17r1(
//       firstColumnContents:{
//         a!sectionLayout_17r1(
//           label: "Reported Loss Detail",
//           firstColumnContents: {
//             a!textField(
//               label:"Loss Number",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.lossNo
//             ),
//             a!textField(
//               label:"Company Code",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value:
//                 rule!CMP_getCompanyCodeByTreatyNo(
//                   rule!CMP_getAllRelatedTreatyNoByReportedLossNo(ri!reportedLossInfo.lossNo)
//                 )
//             )
//           },
//           secondColumnContents:{
//             a!textField(
//               label:"Claim Status",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.lossStatus
//             )
//           }
//         ),
//         a!sectionLayout_17r1(
//           firstColumnContents: {
//             a!dateField(
//               label: "Date of Report",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.reportedDate
//             )
//           },
//           secondColumnContents:{
//             a!textField(
//               label: "Event No.",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.lossEventNo
//             )
//           }
//         ),
//         a!sectionLayout_17r1(
//           firstColumnContents: {
//             a!textField(
//               label: "FSRI Loss No.",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.fsriLossNo
//             )
//           },
//           secondColumnContents:{
//             a!textField(
//               label: "FSRI Event No.",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: rule!CMP_getLossEventDetails(ri!reportedLossInfo.lossEventNo).fsriEventNo
//             )
//           }
//         ),
//         if(isnull(ri!reportedLossInfo.fsriLossNo),{},
//         a!sectionLayout_17r1(
//           firstColumnContents:{
//             a!textField(
//             label: "FSRI Loss Description",
//             labelPosition: "ADJACENT",
//             disabled: true, 
//             value: rule!CMP_getAllBPMLossById(ri!reportedLossInfo.fsriLossNo).text
//             )
//           },
//           secondColumnContents:{
//             a!textField(
//               label: "FSRI Event Description",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: rule!CMP_getAllBPMLossEventById(rule!CMP_getLossEventDetails(ri!reportedLossInfo.lossEventNo).fsriEventNo).text
//             )
//           }
//         )
//         ),
//         a!sectionLayout_17r1(
//           firstColumnContents: {
//             a!dateField(
//               label: "Date of Loss (From)",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value:ri!reportedLossInfo.lossFromDate
//             )
//           },
//           secondColumnContents: {
//             a!dateField(
//               label: "Date of Loss (To)",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.lossToDate
//             )
//           }
//         ),
//         a!sectionLayout_17r1(
//           firstColumnContents: {
//             a!textField(
//               label: "Cause of Loss",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.cause
//             ),
//             a!paragraphField(
//               label: "Brief Description",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.description
//             ),
//             a!textField(
//               label: "Name of Claimant",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.claimant
//             ),
//             a!textField(
//               label: "Reserve Team Member",
//               labelPosition: "ADJACENT",
//               disabled: true,
//               value: ri!reportedLossInfo.reserveTeamMember
//             ),
//             a!linkField(
//               label: "Relative Loss Event Submission:",
//               links: a!safeLink(
//                 label: ri!lossEventNo,
//                 uri: urlforrecord(rule!CMP_getLossEventRecord(), rule!CMP_getLossEventDetailsByLossEventNo(ri!lossEventNo).id)        
//               )
//             )
//           }
//         )
//       }
//     )
//   )
  
  
  