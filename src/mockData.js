/**
 * Created : vincent
 * Date : 2019-07-10  16:57
 * Email : wangxiao@wafersystems.com
 */

export const deptTree = [{
  id: 1,
  parentId: 0,
  children: [
    {
      id: 3,
      parentId: 1,
      children: [
        {
          id: 4,
          parentId: 3,
          children: [
            {
              id: 5,
              parentId: 4,
              children: [],
              name: '院校农信',
            },
            {
              id: 6,
              parentId: 4,
              children: [],
              name: '院校农信123',
            },
          ],
          name: '高新农信',
        },
        {
          id: 14,
          parentId: 3,
          children: [
            {
              id: 15,
              parentId: 14,
              children: [],
              name: '院校农信B',
            },
            {
              id: 16,
              parentId: 14,
              children: [],
              name: '院校农信A',
            },
          ],
          name: '高新农信C',
        },
      ],
      name: '潍坊农信',
    },
  ],
  name: '山东农信',
}];

const tmp =[]

for (let i = 0; i < 4 ; i++) {
  tmp.push( {
    userId: 1,
    id:i,
    name: 'admin',
    password: '$2a$10$QOfWxxFyAMmEEmnuw9UI/..1s4B4eF/u9PzE2ZaGO.ij9YfmcUy.u',
    salt: null,
    wxOpenid: 'o_0FT0uyg_H1vVy2H0JpSwlVGhWQ',
    qqOpenid: null,
    createTime: '2018-04-20 07:15:18',
    updateTime: '2019-03-12 16:04:42',
    jobs: 'a@a.com',
    delFlag: '0',
    lockFlag: '0',
    rank: '17034642888',
    avatar: 'lengleng-0d2a7b025da14d8d93f595b3fa082d82.jpg',
    workNumberNumber: 1,
    tenantId: 1,
    fun: '真理部',
    roleList: [
      {
        roleId: 1,
        roleName: '管理员',
        roleCode: 'ROLE_ADMIN',
        roleDesc: '管理员',
        dsType: 2,
        dsScope: '2',
        createTime: '2017-10-29 15:45:51',
        updateTime: '2018-12-26 14:09:11',
        delFlag: '0',
      },
    ],
  },)
}

export const userList = {
  records: tmp,
  total: 11,
  size: 10,
  current: 1,
  searchCount: true,
  pages: 1,
};
