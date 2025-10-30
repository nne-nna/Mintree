import { CloudUpload} from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

type Props = {
    onUpload: (results: any) => void;
};


export const UploadButton = ({ onUpload }: Props) => {
    const { CSVReader } = useCSVReader();
    // add a table

    return (
        <CSVReader onUploadAccepted={onUpload}>
            {({ getRootProps }: any) => (
                <Button
                    size="sm"
                    className="flex-1 lg:flex-initial"
                    {...getRootProps()}
                >
                    <CloudUpload className="size-4 mr-2" />
                    Import
                </Button>
            )}
        </CSVReader>
    )
}