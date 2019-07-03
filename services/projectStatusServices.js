var fs = require('fs');

const filePath = './public/data/project.json';


const insert = () => {

}

const updateById = (project) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, projectListBuffer) => {
      if (err) reject(err)
      else resolve(projectListBuffer)
    })
  })
    .then(res => {
      let dataList = JSON.parse(res.toString());
      dataList.forEach(d => {
        if (d.id === project.id) {
          Object.assign(d, project);
        }
      })
      return dataList;
    })
    .then(res => {
      return new Promise((resolve, reject) => {
        fs.writeFile(filePath, Buffer(JSON.stringify(res)), (err) => {
          if (err) reject(err)
          else resolve()
        })
      })
    })
}

const query = (project) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, projectListBuffer) => {
      if (err) {
        reject(err);
        return;
      }
      const projectList = JSON.parse(projectListBuffer.toString());
      if (!project) {  // queryAll
        resolve(projectList);
      } else {  // queryByParams
        let newList = projectList.filter(item => {
          let pass = true;
          Object.keys(project).forEach(key => {
            if (project[key] !== item[key]) pass = false;
          })
          return pass;
        })
        resolve(newList);
      }

    })
  })
}

module.exports = {
  insert,
  updateById,
  query,
}