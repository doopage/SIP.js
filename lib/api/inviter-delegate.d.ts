import { IncomingResponse } from "../core/messages/incoming-response.js";
import { SessionDelegate } from "./session-delegate.js";
/**
 * Delegate for {@link Inviter}.
 * @public
 */
export interface InviterDelegate extends SessionDelegate {
    onProgress?(inviteResponse: IncomingResponse): void;
    onAccept?(inviteResponse: IncomingResponse): void;
    onRedirect?(inviteResponse: IncomingResponse): void;
    onReject?(inviteResponse: IncomingResponse): void;
}
