import { jwtVerify } from 'jose';

// Çevre değişkenlerinden anahtarı al ve BASE64URL'den BASE64'e dönüştür
export const getSecretKey = () => {
    const base64urlSecretKey = process.env.NEXT_PUBLIC_TOKEN_SECURITY;

    if (!base64urlSecretKey) {
        throw new Error('Secret key not found');
    }

    // BASE64URL'yi BASE64 formatına dönüştür
    const base64SecretKey = base64urlSecretKey.replace(/_/g, '/').replace(/-/g, '+');
    const secretKey = Buffer.from(base64SecretKey, 'base64');
    
    return secretKey;
};

// JWT token'ı doğrulama
export const verifyJwtToken = async (token: string) => {
    try {
        const secretKey = getSecretKey();

        // JWT'yi doğrulama
        const { payload } = await jwtVerify(token, secretKey);

        return payload;
    } catch (error) {
        console.error('Token doğrulama hatası:', error);
        throw error; // Hata durumunda hata fırlatın
    }
};
