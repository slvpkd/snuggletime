import { ReactPropTypes } from 'react';

export interface IImageButtonProps extends Partial<ReactPropTypes> {
    src: string;
    title: string;
    isSelected: boolean;
    clb: () => void;
    padding?: number;
    width?: string;
}

export const ImageButton = (props: IImageButtonProps) => {

    return (
        <div>
            <button className="group relative mb-2 block  overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
               
                <img
                    src={props.src}
                    onClick={() => props.clb()}
                    loading="lazy"
                    alt={props.title}
                    className={`${props.width ?? 'w-full'} object-cover ${
                        props.padding && 'p-' + props.padding
                    }  aspect-square object-center transition duration-200 group-hover:scale-110`}
                />
                {props.isSelected && (
                    <span
                        className={`absolute left-0 top-0 rounded-br-lg bg-violet-500  text-${
                            props.padding && props.padding > 0
                                ? 'xs px-2 py-1'
                                : 'xl px-2 py-1'
                        } uppercase tracking-wider text-white`}
                    >
                        &#x2713;
                    </span>
                )}
            </button>

            <div>
                <p className=" text-gray-500 transition duration-100 lg:text-lg">
                    {props.title}
                </p>
            </div>
        </div>
    );
};

export default ImageButton;

// <div>
//     <button className="group relative mb-2 block  overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
//         <img
//             src={'../../assets/Characters/' + loc.filename}
//             onClick={() => setLocalPrimaryCharacter(loc.name)}
//             loading="lazy"
//             alt={loc.label}
//             className={`w-24 object-cover p-2 aspect-square object-center transition duration-200 group-hover:scale-110`}
//         />
//         {loc.name === primaryCharacter && (
//             <span
//                 className={`absolute left-0 top-0 rounded-br-lg bg-violet-500 px-2 py-1 text-xs uppercase tracking-wider text-white`}
//             >
//                 &#x2713;
//             </span>
//         )}
//     </button>

//     <div>
//         <p className=" text-gray-500 transition duration-100 lg:text-lg">
//             {loc.label}
//         </p>
//     </div>
// </div>;
