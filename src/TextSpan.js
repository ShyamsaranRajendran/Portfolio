import { motion, transform ,useAnimationControls} from 'framer-motion';

const TextSpan = ({ children }) => {
const control = useAnimationControls();

    const rubberband=()=>{
      control.start({
transform:[
       "scale3d(1,1,1)",
        "scale3d(1.4,.551,1)",
         "scale3d(.75,1.25,1)",
          "scale3d(1.25,1.85,1)",
           "scale3d(.9,1.05,1)",
            "scale3d(1,1,1)",
    ]
      }) 
    }
   
    return (
        <motion.span 
        animate={control}
        onMouseOver={()=> rubberband()}>
            {children}
        </motion.span>
    );
};

export default TextSpan;
