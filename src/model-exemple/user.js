'use strict'

exports.getUser = () => new Promise((resolve, reject) => {
    const users = [
        { name: 'Antônio Prudente de Morais', age: 59, from: 'Brazil' },
        { name: 'Mor Golveia de Lima', age: 30, from: 'Itália' },
        { name: 'Ronaldinho Gaúcho', age: 19, from: 'Brazil' },
        { name: 'Não sei o nome', age: 13, from: 'Canadá' },
        { name: 'Klose o Carrrasco', age: 19, from: 'Alemanha' },
        { name: 'Vladimir Putin', age: 29, from: 'Russia' },
        { name: 'Xin Zhao da Silva', age: 69, from: 'China' },
        { name: 'Donald Trump', age: 79, from: 'USA' },
        { name: 'La chica ñ', age: 14, from: 'México' },
        { name: 'Hola amigo', age: 11, from: 'Chile' },
        { name: 'Hermano', age: 88, from: 'Argentina' },
        { name: 'Caviar e outras coisas', age: 21, from: 'França' },
        { name: 'Aoi Aoi a No Sora', age: 45, from: 'Japão' },
    ]
    resolve(users)
})
