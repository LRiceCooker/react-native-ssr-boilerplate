
import {layout} from '../tokens/layout';

const layoutVariants = {
    container:{
        true:{
            display: 'flex'
        }
    },
    row:{
        true:{
            flexDirection: 'row'
        }
    },
    column:{
        true:{
            flexDirection: 'column'
        }
    },
    alignCenter: {
        true: {
            alignItems: 'center'
        }
    },
    alignEnd: {
        true: {
            alignItems: 'flex-end'
        }
    },
    alignStart: {
        true: {
            alignItems: 'flex-start'
        }
    },
    justifyCenter: {
        true: {
            justifyContent: 'center'
        }
    },
    justifyEnd: {
        true: {
            justifyContent: 'flex-end'
        }
    },
    justifyStart: {
        true: {
            justifyContent: 'flex-start'
        }
    },
    justifyBetween: {
        true: {
            justifyContent: 'space-between'
        }
    },
    justifyAround: {
        true: {
            justifyContent: 'space-around'
        }
    },
    justifyEvenly: {
        true: {
            justifyContent: 'space-around'
        }
    },
    fbFull: {
        true: {
            flexBasis: '100%'
        }
    },
    fn: {
        true: {
            flex: 0
        }
    },
    f1: {
        true: {
            flex: layout.f1//"$layout.f1"
        }
    },
    f2: {
        true: {
            flex: layout.f2
        }
    },
    f3: {
        true: {
            flex: layout.f3
        }
    },
    f4: {
        true: {
            flex: layout.f4
        }
    },
    f5: {
        true: {
            flex: layout.f5
        }
    },
    f6: {
        true: {
            flex: layout.f6
        }
    },
    f7: {
        true: {
            flex: layout.f7
        }
    },
    f8: {
        true: {
            flex: layout.f8
        }
    },
    fb1: {
        true: {
            flexBasis: "$layout.fb1"
        }
    },
    fb2: {
        true: {
            flexBasis: "$layout.fb2"
        }
    },
    fb3: {
        true: {
            flexBasis: "$layout.fb3"
        }
    },
    fb4: {
        true: {
            flexBasis: "$layout.fb4"
        }
    },
    fb5: {
        true: {
            flexBasis: "$layout.fb5"
        }
    },
    fb6: {
        true: {
            flexBasis: "$layout.fb6"
        }
    },
    fb7: {
        true: {
            flexBasis: "$layout.fb7"
        }
    },
    fb8: {
        true: {
            flexBasis: "$layout.fb8"
        }
    },
}

export default layoutVariants