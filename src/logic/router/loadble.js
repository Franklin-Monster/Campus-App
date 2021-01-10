import Loadable from 'react-loadable'
import Loading from '../../components/router-loading'
const Load = (comp) => {
    return Loadable({
        loader: comp,
        loading: Loading,
        delay: 0
    })
}
export default Load