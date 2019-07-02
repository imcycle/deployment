var fs = require('fs');

const insert = () => {

}

const updateById = () => {

}

const query = (project, callback) => {
  fs.readFile('./public/data/project.json', (err, projectListBuffer) => {
    if (err) {
      callback(err, null);
      return;
    }

    const projectList = JSON.parse(projectListBuffer.toString());

    if (!project) {  // queryAll
      callback(null, projectList);
    } else {  // queryByParams
      let newList = projectList.filter(item => {
        let pass = true;
        Object.keys(project).forEach(key => {
          if (project[key] !== item[key]) pass = false;
        })
        return pass;
      })
      callback(null, newList);
    }

  })
}

module.exports = {
  insert,
  updateById,
  query,
}