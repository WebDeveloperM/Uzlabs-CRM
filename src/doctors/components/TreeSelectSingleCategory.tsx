// import React, { useMemo, useState } from "react";
// import { TreeSelect } from "antd";
// import type { TreeSelectProps } from "antd";
// import { WorkerDataByLanguage } from "@clinica/types";

// interface DataNode {
//   id: number;
//   nameUz: string;
// }

// export interface WorkerData {
//   [key: string]: DataNode[];
// }

// interface TreeSelectComponentProps {
//   data: {
//     uz: WorkerDataByLanguage;
//     rus: WorkerDataByLanguage;
//   };
//   language: "uz" | "rus"; // Tanlangan til
//   placeholder?: string; // Tanlov matni
//   onChange: (selected: number) => void; // Tanlangan IDs
// }

// const TreeSelectSingleCategory: React.FC<TreeSelectComponentProps> = ({
//   data = { uz: {}, rus: {} },
//   language,
//   placeholder,
//   onChange,
// }) => {
//   const treeData = useMemo(() => {
//     const workerData = data[language];
//     if (!workerData || Object.keys(workerData).length === 0) {
//       return []; // Agar ma'lumot bo'lmasa, bo'sh array qaytariladi
//     }
//     return Object.entries(workerData).map(([category, items]) => ({
//       title: category, // Kategoriya ko‘rinadi
//       value: category, // Tanlanmasligi uchun unique qiymat beriladi
//       key: category,
//       selectable: false, // Kategoriya tanlanmaydi
//       children: items.map((item: any) => ({
//         title: item.nameUz, // Tilga qarab nomni tanlash
//         value: item.id,
//         key: item.id,
//       })),
//     }));
//   }, [data, language]);

//   const [value, setValue] = useState<number | null>(null);

//   const handleChange: TreeSelectProps<number>["onChange"] = (newValue) => {
//     setValue(newValue);
//     onChange(newValue);
//   };

//   return (
//     <TreeSelect
//       treeData={treeData}
//     //   @ts-ignore
//       value={value}
//       onChange={handleChange}
//       placeholder={placeholder}
//       style={{ width: "100%", height:"37px", paddingTop: "4px" }}
//       treeDefaultExpandAll
//     />
//   );
// };


// export default TreeSelectSingleCategory;


// Tree select with searc input 

import React, { useMemo, useState } from "react";
import { TreeSelect } from "antd";
import type { TreeSelectProps } from "antd";
import { WorkerDataByLanguage } from "@clinica/types";

interface DataNode {
  id: number;
  nameUz: string;
}

export interface WorkerData {
  [key: string]: DataNode[];
}

interface TreeSelectComponentProps {
  data: {
    uz: WorkerDataByLanguage;
    rus: WorkerDataByLanguage;
  };
  language: "uz" | "rus"; // Tanlangan til
  placeholder?: string; // Tanlov matni
  onChange: (selected: number) => void; // Tanlangan IDs
}

const TreeSelectSingleCategory: React.FC<TreeSelectComponentProps> = ({
  data = { uz: {}, rus: {} },
  language,
  placeholder,
  onChange,
}) => {
  const treeData = useMemo(() => {
    const workerData = data[language];
    if (!workerData || Object.keys(workerData).length === 0) {
      return []; // Agar ma'lumot bo'lmasa, bo'sh array qaytariladi
    }
    return Object.entries(workerData).map(([category, items]) => ({
      title: category, // Kategoriya ko‘rinadi
      value: category, // Tanlanmasligi uchun unique qiymat beriladi
      key: category,
      selectable: false, // Kategoriya tanlanmaydi
      children: items.map((item: any) => ({
        title: item.nameUz, // Tilga qarab nomni tanlash
        value: item.id,
        key: item.id,
      })),
    }));
  }, [data, language]);

  const [value, setValue] = useState<number | null>(null);
  const [_, setSearchValue] = useState<string>("");

  const handleChange: TreeSelectProps<number>["onChange"] = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const filterTreeNode = (inputValue: string, treeNode: any) => {
    const title = treeNode.title.toLowerCase();
    return title.includes(inputValue.toLowerCase());
  };

  return (
    <TreeSelect
      treeData={treeData}
      // @ts-ignore
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ width: "100%", height: "37px", paddingTop: "4px" }}
      treeDefaultExpandAll
      showSearch
      onSearch={setSearchValue}
      filterTreeNode={filterTreeNode}
    />
  );
};

export default TreeSelectSingleCategory;





// Ishlatilishi

// const [selectedIds, setSelectedIds] = useState<number>()
// const handleChangeTreeSelect = (ids: number) => {
//   setSelectedIds(ids)
//   setData({ ...data, position: ids })
// }




{/* <div className="2xl:col-span-3 col-span-4 mt-1">
  <label className="text-gray-700 font-medium mt-2">
    Hodimning roli
    <span className="text-red-500">*</span>
  </label>

  <TreeSelectSingleCategory
    data={workerPositions.data?.data}
    language="uz"
    placeholder="Tanlang"

    onChange={handleChangeTreeSelect}
  />
</div> */}

