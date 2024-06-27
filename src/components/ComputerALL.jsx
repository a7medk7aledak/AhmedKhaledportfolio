
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
const Computer = () => {
    return (
        <section className={`cursor-grab relative w-full h-screen mx-auto flex -top-300`}
        style={{top:"-200px"}}>
            <ComputersCanvas />
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <div style={{ bottom: "30px" }} className='w-[64px] h-[35px] rounded-3xl border-4 border-secondary flex justify-content: space-between align-items: center p-2  bottom-20'>
                        <motion.div
                            animate={{
                                x: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
            </div>
        </section>
    )
}

export default Computer
