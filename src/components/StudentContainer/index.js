import React, { useState, useEffect } from 'react'
import StudentList from '../StudentList/index'
import { getStudents } from '../../services/student'
import Pager from '../common/Pager'
/**
 * 用于提供数据,以及控制数据的变化
 */
export default function StudentContainer() {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [total, setTotal] = useState(0);
    const [panelNumber, setPanelNumber] = useState(5);
    //当页码和也容量发生变化时将重新获取数据
    useEffect(() => {
        (async function () {
            const res = await getStudents(page, limit);
            setStudents(res.findByPage);
            setTotal(res.cont);
        })();
    }, [limit, page])//空数组的目的是让该副作用函数没有任何依赖性,从而仅在首次挂载时运行
    return (
        <div>
            <StudentList stus={students} />
            <Pager
                panelNumber={panelNumber}
                total={total}
                limit={limit}
                current={page}
                onPageChange={newPage => {
                    setPage(newPage)
                }}
            />
            <p>最多显示的数字页码:
                <input type="number"
                    value={panelNumber}
                    onChange={e => { setPanelNumber(parseInt(e.target.value)) }}
                />
            </p>
            <p>每页显示多少条:<input type="number"
                value={limit}
                onChange={e => { setLimit(parseInt(e.target.value)) }}
            /></p>

        </div>
    )
}
