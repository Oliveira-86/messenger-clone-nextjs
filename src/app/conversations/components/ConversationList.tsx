import { FullConversationType } from '@/app/types/FullConversationType'
import { FC } from 'react'

interface ConversationListProps {
  initialsItems: FullConversationType[]
}

const ConversationList: FC<ConversationListProps> = ({ initialsItems }) => {
  return <div>ConversationList</div>
}

export default ConversationList
