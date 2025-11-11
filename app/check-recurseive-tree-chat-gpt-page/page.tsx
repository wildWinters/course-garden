"use client";
import React, { useState } from "react";
import { Tree, TreeNodeDatum } from "react-d3-tree";

const treeData: TreeNodeDatum = {
  name: "Root",
  attributes: { info: "root info" },
  children: [
    { name: "Child 1", attributes: { info: "leaf 1" } },
    {
      name: "Child 2",
      attributes: { info: "leaf 2" },
      children: [{ name: "Child 2.1" }, { name: "Child 2.2" }],
    },
  ],
};

// Accordion shadcn + рекурсивний рендер
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { TreeView, NodeModel } from "@minoru/react-d3-tree-view";
import "@minoru/react-d3-tree-view/dist/react-d3-tree-view.css";

export type TreeNode = {
  id: string;
  label: string;
  meta?: string;
  children?: TreeNode[];
};

export function RecursiveAccordion({
  nodes,
  level = 0,
  onSelectNode,
}: {
  nodes: TreeNode[];
  level?: number;
  onSelectNode: (id: string) => void;
}) {
  if (!nodes || nodes.length === 0) return null;

  return (
    <Accordion type="single" collapsible>
      {nodes.map((node) => (
        <AccordionItem key={node.id} value={node.id}>
          <AccordionTrigger>
            <div
              style={{ paddingLeft: level * 12 }}
              onClick={() => onSelectNode(node.id)}
            >
              {node.label}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {node.meta && (
              <div className="text-sm text-muted-foreground">{node.meta}</div>
            )}
            {node.children && node.children.length > 0 && (
              <RecursiveAccordion
                nodes={node.children}
                level={level + 1}
                onSelectNode={onSelectNode}
              />
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// Приклад даних акордеону
const mockAccordion: TreeNode[] = [
  {
    id: "1",
    label: "Root 1",
    meta: "info 1",
    children: [{ id: "1.1", label: "Child 1.1" }],
  },
  { id: "2", label: "Root 2" },
];

export default function D3TreeWithAccordionPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const handleSelectNode = (id: string) => {
    setSelectedNode(id);
  };

  const nodesForTree: NodeModel[] = [
    {
      id: "root",
      name: "Root",
      children: [
        { id: "child1", name: "Child 1" },
        {
          id: "child2",
          name: "Child 2",
          children: [
            { id: "child2.1", name: "Child 2.1" },
            { id: "child2.2", name: "Child 2.2" },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "300px", overflowY: "auto", padding: "1rem" }}>
        <h2 className="text-lg font-semibold mb-4">Recursive Accordion</h2>
        <RecursiveAccordion
          nodes={mockAccordion}
          onSelectNode={handleSelectNode}
        />
      </div>

      <div style={{ flex: 1 }}>
        <TreeView
          nodes={nodesForTree}
          selectedNodeId={selectedNode || undefined}
        />
      </div>
    </div>
  );
}
