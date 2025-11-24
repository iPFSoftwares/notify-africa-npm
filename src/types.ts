interface SendSingleRequest {
  phone_number: string;
  message: string;
  sender_id: string;
}

interface SendSingleResponse {
  messageId: string;
  status: string;
}

interface SendBatchRequest {
  phone_numbers: string[];
  message: string;
  sender_id: string;
}

interface SendBatchResponse {
  messageCount: number;
  creditsDeducted: number;
  remainingBalance: number;
}

interface MessageStatusResponse {
  messageId: string;
  status: string;
  sentAt: string | null;
  deliveredAt: string | null;
}

export type {
  SendSingleRequest,
  SendSingleResponse,
  SendBatchRequest,
  SendBatchResponse,
  MessageStatusResponse,
};