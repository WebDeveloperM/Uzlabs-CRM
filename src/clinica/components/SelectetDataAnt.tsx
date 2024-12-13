// import { useWorkerPositions } from '@clinica/hooks/addClinic';
// import Loader from '@core/components/Loader';
// import { Dropdown } from 'rsuite';

// const minWidth = 120;
// export default function SelectetDataAnt() {

//     const workerPositions = useWorkerPositions()
//     const isLoading = workerPositions.isLoading

//     return (
//         <Dropdown title="Dropdown" menuStyle={{ minWidth }} className='bg-white' >
//             {isLoading ? (
//                 <Loader center />
//             ) : (
//                 <div>
//                     {workerPositions.data?.data?.uz &&
//                         Object.entries(workerPositions.data.data.uz).map(([section, positions], key) => (
//                             <div key={key}>
//                                 <Dropdown.Menu title={section} style={{ minWidth }}>
//                                     {Array.isArray(positions) &&
//                                         positions.map((position) => (
//                                             <Dropdown.Item key={position.id}>
//                                                 {position.nameUz}
//                                             </Dropdown.Item>
//                                         ))}
//                                 </Dropdown.Menu>
//                             </div>
//                         ))}
//                 </div>
//             )
//             }


//         </Dropdown >
//     )
// }



