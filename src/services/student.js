const appkey = "demo13_1545210570249"
const url = "http://open.duyiedu.com"
/**
 * 获取所有学生
 */
export async function getAllStudents() {
    return await fetch(`${url}/api/student/findAll?appkey=${appkey}`).then(res => res.json()).then(res => res.data);
}
/**
 * 根据页码每页数量获取学生
 * page size
 */
export async function getStudents(page = 1, limit = 10) {
    return await fetch(`${url}/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`).then(res => res.json()).then(res => res.data);
}

/**
 * 如果传递了key属性(key有值),则按照关键字和性别搜索
 * 如果key没有值,则对所以学生进行分页
 * @param {*} param0 
 */
export async function searchStudents({ page = 1, limit = 10, key = "", sex = -1 } = {}) {
    if (key) {
        //搜索
        const res = await fetch(`${url}/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`).then(res => res.json()).then(res => res.data);
        res.datas = res.searchList;
        delete res.searchList;
        return res
    }
    else {
        //忽略性别,查询全部
        const res = await getStudents(page, limit)
        res.datas = res.findByPage;
        delete res.findByPage;
        return res;
    }
}