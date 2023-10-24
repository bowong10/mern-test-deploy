// import banner1 from '../static/Image/main.jpg'
// import { React, useState, useEffect } from 'react';

// import CustomInput from '../components/CustomInput';
// import DatepickerCalender from '../components/DatepickerCalender';
// import { DatePickerProvider } from '@bcad1591/react-date-picker';
// import '../App.css';

// import styled from 'styled-components'

// // import {
// //     DatePicker,
// //     DatePickerProvider,
// //     useDatePickGetter,
// //     useDatePickReset,
// //   } from '@bcad1591/react-date-picker';

// function Home() {

//     useEffect(() => {
//         console.log("hommies")},[]
//         );
    
    
//     const [checked, setChecked] = useState(true);

//     const [stime, setstime] = useState("noon");
//     const [etime, setetime] = useState("noon");

//     // const { pickedDates } = useDatePickGetter();
//     // const resetFunc = useDatePickReset();

//     return (
//     <div className='container'>
//         <div id='cover'>
//             <picture>
//                 <source srcSet={banner1} sizes="100vw" media="(min-width: 1200px)" />
//                 <source srcSet={banner1} sizes="100vw" media="(min-width: 600px)" />
//                 <img className="test-img" src={banner1} />
//             </picture>
//             <div className='innerContent'>
//                 <div className='formContent cflex'>
//                     <div className="titletxt">Hong Kong Car Rental</div>
//                     <div className="titletxt">
//                         <label>
//                             Return car in same location: 
//                             <input style={{marginLeft:"px"}} type='checkbox' value={checked} onClick={(e)=>setChecked(!e.target.value)} />
//                         </label>
//                     </div>
//                     <div className='rflex inputForm'>
                            
//                         <div><input type='text' /></div>
                            
//                         <div style={{"position":"relative"}}>
//                         <CustomInput icon="date" txt="Pick-up date" val="a"/>
                        
//                         <CustomInput icon="time" txt="Time" val="b"/>
//                         <CustomInput icon="date" txt="Drop-off date" val="c" />
//                         <CustomInput icon="time" txt="Time" val="d" />
                        
//                         <div className='abs'>
                            
//                             <DatePickerProvider>
//                                 <DatepickerCalender />
//                             </DatePickerProvider>
                        
//                         </div>
//                         </div>
// {/*                     
//                         <CustomInput icon="time" txt="Time" val="b"/>
//                         <CustomInput icon="date" txt="Drop-off date" val="c" />
//                         <CustomInput icon="time" txt="Time" val="d" /> */}
//                         <div><button className='submitBtn' onClick={() => console.log("button")}>Search</button></div>
//                     </div>
//                </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home