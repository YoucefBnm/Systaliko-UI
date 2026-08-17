import {
  AiBlock,
  AiConversationLoop,
  AiResult,
  AiSources,
  AiStatus,
  UserMessage,
} from '@/registry/blocks/ai-conversation-loop';
import { Badge } from '@/registry/shadcn/badge';
import { FileTextIcon, SparklesIcon } from 'lucide-react';

const USER_MESSAGE = 'How do I configure the SSO for my enterprise team?';
const ANSWER_TEXT =
  "To configure SSO for your enterprise team, navigate to Settings > Security. You'll need your Identity Provider (IdP) metadata XML file.";

const badge_class = 'h-5 text-[10px] shadow-sm shadow-black/15 rounded-full';
export function AiConversationLoopDemo() {
  return (
    <div className="w-full max-w-xs mx-auto p-4 rounded-xl border bg-card shadow-2xs ring ring-ring/20 h-80 place-content-center">
      <AiConversationLoop className="space-y-6">
        <div className="rounded-2xl rounded-tl-none border bg-input text-muted-foreground w-fit px-2.5 py-1 shadow-sm">
          <UserMessage className="inline-block text-xs" text={USER_MESSAGE} />
        </div>

        <AiBlock>
          <AiStatus>
            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-2 text-xs">
                <SparklesIcon className="size-3 animate-pulse text-primary" />
                <span className="shimmer-text">Scanning Knowledge Base...</span>
              </div>
            </div>
          </AiStatus>
          <AiSources className="flex gap-1 items-center flex-wrap">
            <Badge
              variant="outline"
              className={`${badge_class} text-blue-600 border-blue-200 bg-blue-50`}
            >
              <FileTextIcon className="size-2" />
              Docs: SSO Setup
            </Badge>

            <Badge
              variant="outline"
              className={`${badge_class} text-orange-400 border-orange-200 bg-orange-50`}
            >
              <FileTextIcon className="size-2" />
              Guide: Enterprise
            </Badge>
          </AiSources>
        </AiBlock>
        <AiResult text={ANSWER_TEXT}>
          <span className="text-xs text-muted-foreground">Confidence: 98%</span>
          <Badge
            variant="outline"
            className={`${badge_class} text-green-600 border-green-200 bg-green-50`}
          >
            Verified Source
          </Badge>
        </AiResult>
      </AiConversationLoop>
    </div>
  );
}
