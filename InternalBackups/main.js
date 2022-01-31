
const findIncrementalBackupsFiles = (lastBackupTime, changes) => {

    let needRecallFiles = {}

    changes.forEach((file) => {
        if (file[0] > lastBackupTime && !needRecallFiles.hasOwnProperty(file[1]))
        {
            needRecallFiles[file[1]] = 'needRecall'
        }
    })

    return Object.keys(needRecallFiles)
}


lastBackupTime = 461620205
changes =  [ [461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1] ]

console.log(findIncrementalBackupsFiles(lastBackupTime,changes))
