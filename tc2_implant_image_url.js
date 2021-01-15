const IMPLANT_IMAGE_URL = "data:image/jpeg;base64,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";
