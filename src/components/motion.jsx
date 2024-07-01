import { motion } from "framer-motion"

function Motion({ children, pos = "kanan" }) {
    const initial = { opacity: 0 }
    const whileInView = { opacity: 1 }

    if (pos == "kiri") {
        initial.translateX = -50
        whileInView.translateX = 0
    } 
    else if (pos == "kanan") {
        initial.translateX = 50
        whileInView.translateX = 0
    } 
    else if (pos == "atas") {
        initial.translateY = -100
        whileInView.translateY = 0
    } 
    else if (pos == "bawah") {
        initial.translateY = 50
        whileInView.translateY = 0
    }
    return (
        <motion.div
            initial={initial}
            transition={{ duration: 1 }}
            whileInView={whileInView}

        >
            {children}
        </motion.div>
    )
}

export default Motion;