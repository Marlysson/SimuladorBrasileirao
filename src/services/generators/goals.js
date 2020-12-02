
class Generator{

    static generate(){

        let min = 0
        let max = 6

        return Math.floor( Math.random() * (max - min + 1) ) + min

    }

}

export default Generator