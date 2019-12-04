import React, { useState, useEffect } from 'react'
import StudentSearchBar from '../../components/StudentSearchBar/index'
import StudentTable from '../../components/StudentTable/index'
import { searchStudents } from '../../services/student'
import qs from 'query-string'
import Pager from '../../components/common/Pager/index'
/**
 * 该函数用于获取地址栏参数中提供的查询条件,返回一个对象
 * 如果某些条件在地址栏中缺失,该函数会使用默认值
 * @param {*} params 
 */
function getQuery(search) {
    const queryDefault = {
        page: 1,
        limit: 10,
        key: "",
        sex: -1,
    }
    let query = qs.parse(search);
    query = Object.assign({}, queryDefault, query);
    query.limit = +query.limit;
    query.page = +query.page;
    query.sex = +query.sex;
    return query
}
/**
 * 获取服务器的响应结果
 * @param {Object} query 查询条件对象
 */
function useRes(query) {
    const [res, setRes] = useState({
        cont: 0,
        datas: []
    });
    useEffect(() => {
        searchStudents({
            limit: query.limit,
            key: query.key,
            sex: query.sex,
            page: query.page,
        }).then(res => setRes(res))
    }, [query.limit, query.key, query.sex, query.page]);
    return res
}

function changeLocation(query, history) {
    //根据条件对象改变地址
    const search = qs.stringify(query)
    history.push(`?${search}`)
}

export default function StudentList(props) {
    const query = getQuery(props.location.search);
    const res = useRes(query);
    console.log('重新渲染');

    return (
        <div>
            <StudentSearchBar
                defaultValue={{
                    key: query.key,
                    sex: query.sex
                }}
                onSearch={res => {
                    const newQuery = {
                        ...query,
                        key: res.key,
                        sex: res.sex,
                        page: 1
                    }
                    changeLocation(newQuery, props.history)
                }} />
            <StudentTable stus={res.datas} />
            <Pager
                current={query.page}
                total={res.cont}
                limit={query.limit}
                panelNumber={5}
                onPageChange={newPage => {
                    const newQuery = {
                        ...query,
                        page: newPage
                    }
                    changeLocation(newQuery, props.history)
                }}
            ></Pager>
        </div>
    )
}
