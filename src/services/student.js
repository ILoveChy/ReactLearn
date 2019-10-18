const appkey = "demo13_1545210570249"

/**
 * 获取所有学生
 */
export async function getAllStudents() {
    return await fetch(`http://open.duyiedu.com/api/student/findAll?appkey=${appkey}`)
        .then(res => res.json())
        .then(res => res.data);
}