
// import { Select, Space } from 'antd';
// import { useClinica } from '../context/ClinicaContext';
// import { useWorkerPositions } from '@clinica/hooks/addClinic';

// const options = [
//     { id: 1, label: 'Stomatalogiya', value: 'Stomatalogiya', desc: 'Stomatalogiya' },
//     { id: 2, label: 'Nevralogiya', value: 'Nevralogiya', desc: 'Nevralogiya' },
//     { id: 3, label: 'Narkalogiya', value: 'Narkalogiya', desc: 'Narkalogiya' },
//     { id: 4, label: "Tibiiy ko'rik", value: 'TibbiyKorik', desc: "Tibiiy ko'rik" },
//     { id: 5, label: "Terapiya", value: 'Terapiya', desc: "Terapiya" },
//     { id: 6, label: "Laboratoriya", value: 'Laboratoriya', desc: "Laboratoriya" },
//     { id: 7, label: "Logoped", value: 'Logoped', desc: "Logoped" },
// ];

// export default function SelectedData() {
//     const { setData } = useClinica();
//     const workerPositions = useWorkerPositions()
//     const isLoading = workerPositions.isLoading
//     const error = workerPositions.error

//     const handleChange = (selectedValues: string[]) => {
//         const selectedIds = options
//             .filter(option => selectedValues.includes(option.value))
//             .map(option => option.id);

//         setData((prevData) => ({ ...prevData, additionalServices: selectedIds }))
//     };

//     return (
//         <Space direction="vertical" style={{ width: '100%' }}>
//             <Select
//                 mode="multiple"
//                 style={{ width: '100%' }}
//                 placeholder="Xizmat turlarini tanlang"
//                 onChange={handleChange}
//                 className="mt-1 focus:ring-secondary"
//                 options={
//                     options.map(({ value, label }) => ({
//                         value,
//                         label
//                     }))}
//             />
//         </Space >

//     );
// }


import { TreeSelect } from 'antd';
import { useWorkerPositions } from '@clinica/hooks/addClinic';
import Loader from '@core/components/Loader';
import { useState } from 'react';

export default function WorkerPositionTreeSelect() {
    const workerPositions = useWorkerPositions();
    const isLoading = workerPositions.isLoading;
    const error = workerPositions.error;

    const [value, setValue] = useState<string | undefined>(undefined);

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    // Transforming `workerPositions.data` to TreeSelect-compatible format
    const transformToTreeData = (positions: any) => {
        const uzPositions = positions?.uz || {};
        return Object.entries(uzPositions).map(([category, items]: any) => ({
            title: category, // Root level titles (categories)
            value: category,
            key: category,
            children: items.map((item: any) => ({
                title: item.nameUz, // Position names
                value: item.id.toString(), // Unique id as value
                key: item.id.toString(), // Key for each node
            })),
        }));
    };

    const treeData = workerPositions.data
        ? transformToTreeData(workerPositions.data)
        : [];

    return (
        <div>
            {isLoading ? (
                <Loader center />
            ) : error ? (
                <div>Error loading worker positions</div>
            ) : (
                <TreeSelect
                    style={{ width: '100%' }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                    placeholder="Iltimos, xodim pozitsiyalarini tanlang"
                    treeDefaultExpandAll
                    onChange={handleChange}
                />
            )}
        </div>
    );
}

