import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";


const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-colors cursor-pointer"
        >
            <ArrowLeft size={18} /> Back
        </button>
    )
}
export default BackButton