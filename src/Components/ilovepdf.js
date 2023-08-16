// ilovepdf.js
import axios from "axios";

// const ILovePDF_API_KEY ="project_public_11665e9506191ceddfc09b9ed9810f44_0ZzCbaf457013a60378f37c761da606e3a386"

const ILovePDF_API_KEY = "secret_key_c163b85fff0d54d6f53569d0299695a4_gjjoq47b63d93cf762c34f6f1e91f0ddafad5";

const convertToWord = async (pdfUrl) => {
  try {
    const response = await axios.post(
      "https://api.ilovepdf.com/v1/document/to/docx",
    //   "https://jsonplaceholder.typicode.com/posts",
      {
        secret_key: ILovePDF_API_KEY,
        source: pdfUrl,
      }
    );
    return response.data.document;
  } catch (error) {
    console.error("Error converting PDF to Word:", error);
    throw error;
  }
};

export { convertToWord };

// public key: project_public_11665e9506191ceddfc09b9ed9810f44_0ZzCbaf457013a60378f37c761da606e3a386
