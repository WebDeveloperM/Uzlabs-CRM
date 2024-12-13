
import { DNA } from 'react-loader-spinner'

export default function DNALoader() {
    return (
        <div className="flex justify-center items-center h-screen bg-secondary/5">
            <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{ color: "#238781" }}
                wrapperClass="dna-wrapper rounded-full duration-300 "
            />
        </div>
    )
}


