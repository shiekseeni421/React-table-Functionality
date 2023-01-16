import './styles.scss'
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Lottie from 'react-lottie';
import no_data from 'assets/lottie/no_data.json'


const NoData = (props) => {

    const { colSpan } = props;

    const [loaders, setLoader] = useState(false);


    return (
        <tr>
            <td colSpan={colSpan}>
                <div>
                    <div className='container-nodata'>
                        <Lottie options={
                            {
                                loop: true,
                                autoplay: true,
                                animationData: no_data,
                                colSpan: true,
                            }
                        }
                            height={400}
                            width={400}
                        />

                    </div>
                </div>
            </td>
        </tr>

    )

}


export default NoData;

