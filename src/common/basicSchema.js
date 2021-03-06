import { objToId, idToObj } from '../common/objectId'

const getCollection = (db, name) => {
  if (db.listCollections) return
}

const dealPage = (params = {}) => {
  const { page = 0, rowsPerPage = 0, sortData = {}, ...restParams } = params
  return {
    page, rowsPerPage, restParams, sortData,
  }
}

const dealParams = params =>
    Object.keys(params || {}).reduce((i, e) => !params[e] ? i : ({
      ...i,
      [e]: new RegExp(params[e]),
    }), {})

export const getBasicSchema = ({ dbName }) => {
  const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1)
  const DbName = capitalizeFirstLetter(dbName)
  return {
    Query: {
      [`allData${DbName}`]: async (...arg) => {
        const [, , { db }] = arg
        const res = await db.collection(dbName).find().toArray();
        return JSON.stringify(res.map(objToId))
      },
      [`one${DbName}`]: async (...arg) => {
        const [, { id } , { db }] = arg
        const res = await db.collection(dbName).findOne({
          _id: idToObj(id)
        })
        console.log(`one${DbName}` + res)
        return res
      },
      [`all${DbName}`]: async (...arg) => {
        const [, params, { db }] = arg
        const { page, rowsPerPage, sortData, restParams } = dealPage(params.data)
        const res = await db.collection(dbName).find(dealParams(restParams)).collation({locale: 'zh', numericOrdering: true}).sort(sortData).skip(rowsPerPage * page).limit(rowsPerPage).toArray()
        return res.map(objToId)
      },
      [`total${DbName}`]: async (...arg) => {
        const [, params, { db }] = arg
        const { page, rowsPerPage, restParams } = dealPage(params.data)
        const res = await db.collection(dbName).countDocuments(dealParams(restParams))
        return res || 0
      },
    },
    Mutation: {
      [`update${DbName}`]: async (...arg) => {
        const now = new Date()
        const [, { data }, { db }] = arg
        if (data.id) {
          const res = await db.collection(dbName).updateOne({
            _id: idToObj(data.id)
          }, {
            $set: {
              ...data,
              modifyDate: now,
            }
          })
          console.log('updateOne', data)
          return data
        } else {
          const res = await db.collection(dbName).insertOne({
            ...data,
            createDate: now,
            modifyDate: now,
          })
          console.log('insertOne', res.insertedId)
          return {
            ...data,
            createDate: now,
            modifyDate: now,
            id: res ? res.insertedId.toString() : ''
          }
        }
      },
      [`deleteOne${DbName}`]: async (...arg) => {
        const [, { id }, { db }] = arg
        const res = await db.collection(dbName).deleteOne({
          _id: idToObj(id)
        })
        console.log('deleteOne:' + res)
        return `${res.result.n}`
      },
      [`importAll${DbName}`]: async (...arg) => {
        const [, { data }, { db }] = arg
        const arr = JSON.parse(data)

        console.log(arr)
        // const res = await db.collection(dbName).insertMany(arr)
        // const res = await db.collection(dbName).deleteOne({
        //   _id: idToObj(id)
        // })
        console.log('importAll:' + data)
        return `todo`
      }
    }
  }
}

