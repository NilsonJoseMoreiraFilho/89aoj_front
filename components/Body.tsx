import { Filter } from "./Filter";
import { NoTasks } from "./NoTasks";
import { useEffect, useState } from 'react'
import { List } from "./List"
import { NextPage } from "next"

type BodyProps = {
    previsionDateStart : string,
    previsionDateEnd : string,
    status: number,
    tasks: any,
    getFilteredData() : void
    setPrevisionDateStart(s:string):void,
    setPrevisionDateEnd(s:string):void,
    setStatus(n:number):void,

}

export const Body: NextPage<BodyProps> = ({getFilteredData, setPrevisionDateStart, setPrevisionDateEnd, setStatus, previsionDateStart, previsionDateEnd, status, tasks}) => {

    useEffect(() => {
        getFilteredData;
    }, [previsionDateStart, previsionDateEnd, status])

    return (
        <div className="container-body">
           <div className="filter">
            <Filter 
                previsionDateStart={previsionDateStart}
                previsionDateEnd={previsionDateEnd}
                status={status}
                setPrevisionDateStart={setPrevisionDateStart}
                setPrevisionDateEnd={setPrevisionDateEnd}
                setStatus={setStatus}
            />
           </div>
           <div className="content">
                {getFilteredData == null ? <NoTasks/> : <List tasks={tasks} getFilteredData={getFilteredData}/>}
           </div>
        </div>
    )
}