const fs = require('fs')

// for writing file

// non blocking io model - asynchronus
fs.writeFile('createdFileByFs.txt','this is data to be added',()=>{
    // console.log('data is added writeFile')
})

//  synchronous write file function 
fs.writeFileSync('createdSyncFileByFs.txt','this is data to be added with synchronous nature hi this is ganesh')

console.log('observer !')


// for reading data from file


    fs.readFile('createdSyncFileByFs.txt','utf-8',(err)=> {
      
        
            console.log(err)
      
    })
    // we also have option to this operation with synchronously by simply using fs.readFileSync

    

// updating file data

fs.appendFile('createdSyncFileByFs.txt','im updating this data in the createdSyncFileByFs.txt file', (err)=>{
        console.log(err)
} )
// we also have option to this operation with synchronously by simply using fs.appendFileSync


// renaming the file

fs.rename('createdSyncFileByFs.txt','fileNameChangedByFsRename.txt',(err)=>{
    console.log(err)
})
// we also have option to this operation with synchronously by simply using fs.renameSync


// deleting file

fs.unlink('dummyFile.txt',(err)=>{
    console.log(err)
})
