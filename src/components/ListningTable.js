import { useState } from "react";
import Chip from "./Chip";
const ListingTable = ({data,thead}) => {
    const [allSelect,SetAllSelect] = useState(false);
    const [selectedIds,setSelectedIds] = useState([])
    const checkBox = (id) => {
        let checkedId = selectedIds;
        if(checkedId.includes(id)){
            const index = checkedId.findIndex((row)=>row===id);
            checkedId.splice(index,1)
        }else{
            checkedId.push(id);
        }
        if(checkedId.length === data.length){
            SetAllSelect(true);
        }else{
            SetAllSelect(false);
        }
        setSelectedIds([...checkedId]);
    }
    const checkAll = () => {
        if(!allSelect){
           const selectIds = data.map((row)=>{
                return row.id;
            })
            setSelectedIds([...selectIds]);
            SetAllSelect(true);
        }else{
            setSelectedIds([]);
            SetAllSelect(false);
        }
    }
    
    return (
        <>
        <div className="container-fluid listing-table-wrapper height-fix">
               <table className="w-100 common-listing-table">
                    <thead>
                        <tr>
                        {
                            thead.map((th,index)=>(
                                        th.name==='checkbox'
                                        ?
                                        <th key={index} width="40">
                                            <input type="checkbox" onChange={()=>checkAll()} checked={allSelect}/>
                                        </th>
                                        :
                                        <th key={index} style={{minWidth:th.width,maxWidth:th.width}}>{th.name}</th>
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row,rowindex)=>(
                                    <tr key={'row'+rowindex}>
                                       {
                                        thead.map((th,index)=>(
                                            th.name==='checkbox'?
                                                <td key={rowindex+''+index}>
                                                    <input type="checkbox" onChange={()=>checkBox(row.id)} checked={selectedIds.includes(row.id)}/>
                                                </td>
                                            :th.name==='Image'?
                                                <td key={rowindex+''+index}>Photo</td>
                                            :th.name==='Subject'?
                                                <td key={rowindex+''+index}>
                                                    {
                                                        row[th.key] &&
                                                        row[th.key].map((subject)=>(
                                                            <Chip key={subject} className="me-1 mb-1" text={subject} color="red" />
                                                        ))
                                                    }
                                                </td>
                                            :th.name==='Action'?
                                                <td key={rowindex+''+index}>action</td>
                                            :<td key={rowindex+''+index}>{row[th.key]}</td>
                                        ))
                                       }
                                    </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>

                    </tfoot>
               </table>
            </div>
        </>
    )
}
export default ListingTable;