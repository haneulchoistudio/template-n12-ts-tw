import { motion } from 'framer-motion'

interface IPrimaryLayer {
    children: React.ReactNode
    popup?: React.ReactNode
}
const PrimaryLayer = ({ children, popup }: IPrimaryLayer) => {
    return (
        <>
            {popup && popup}
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{
                    type: 'just',
                    stiffness: 260,
                    damping: 20,
                }}
                className="relative w-full h-full"
            >
                {children}
            </motion.div>
        </>
    )
}

export default PrimaryLayer
