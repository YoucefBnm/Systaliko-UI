'use client';
import { Node, NodeProps, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Handle, Position } from '@xyflow/react';
import {
  ClientCard,
  DevCard,
  MemberCard,
  TaskMainCard,
  TaskSubCard,
} from '@/registry/blocks/flow-assets';
import React from 'react';

const CARD_COMPONENTS = {
  client: ClientCard,
  manager: MemberCard,
} as const;

type CardType = keyof typeof CARD_COMPONENTS;
type WorkflowNodeProps = NodeProps<
  Node<{ cardType: CardType }, 'workflowCard'>
>;
const nodeTypes = {
  workflowCard: WorkflowCardNode,
};

export function WorkflowCardNode({ data }: WorkflowNodeProps) {
  // 2. data.cardType is now strictly typed as "client" | "manager"
  const Component = CARD_COMPONENTS[data.cardType];

  if (!Component) return null;

  return <Component />;
}

const workflow_nodes: Node[] = [
  {
    id: 'workflow-client',
    type: 'workflowCard',
    position: { x: 100, y: 0 },
    data: { cardType: 'client' },
  },
  {
    id: 'workflow-manager',
    type: 'workflowCard',
    position: { x: 100, y: 100 },
    data: { cardType: 'manager' },
  },
];
const workflow_edges = [
  {
    id: 'e1-2',
    source: 'workflow-client',
    target: 'workflow-manager',
    style: { stroke: 'var(--border)', strokeWidth: 1 },
  },
];

export function FlowDemo() {
  return (
    <div className="min-h-screen place-content-center space-y-6 p-8">
      {/* <ClientCard />
      <MemberCard />
      <TaskMainCard />
      <TaskSubCard />
      <DevCard /> */}

      <div className="border-y-dashed mx-auto h-[500px] w-full max-w-7xl border-y">
        <ReactFlow
          nodes={workflow_nodes}
          edges={workflow_edges}
          nodeTypes={nodeTypes}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          zoomOnDoubleClick={false}
          proOptions={{ hideAttribution: true }}
        />
      </div>
    </div>
  );
}
