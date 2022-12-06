import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';


const useLocomotiveScroll = ({ ref, ...otherProps }) => {
    const locoScrollRef = useRef()

    useEffect(() => {
        if (ref?.current) {
            locoScrollRef.current = new LocomotiveScroll({
                el: ref.current,
                smooth: true,
                ...otherProps
            })
        }
    }, [ref]);

    return [locoScrollRef]

}
export default useLocomotiveScroll