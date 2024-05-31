import crypto from "crypto"
import mongodb from "mongodb"

export const hashObjectIds = function (objectId1: string, objectId2: string, key: string = process.env.NEXT_PUBLIC_KEY_HASH_OBJECTID as string) {
    const hash = crypto.createHmac('sha256', key);
    hash.update(objectId1 + objectId2);
    const hashedId = hash.digest('hex').slice(0, 24);
    return hashedId;
}