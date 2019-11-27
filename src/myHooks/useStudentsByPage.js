import { useEffect, useState } from 'react'
import { getStudents } from '../services/student'

/**
 * 根据页码和页容量获取学生数据得到相应结果
 * 并且页码和页容量变化时,重新获取相应结果
 */
export default function useAllStudents(page = 1, limit = 10) {
    const [res, setRes] = useState();
    useEffect(() => {
        (async () => {
            const res = await getStudents(page, limit);
            setRes(res);
        })();
    }, [page, limit]);
    return res
}