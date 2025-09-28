export interface CourseData {
  id: string;
  name: string;
  passed: string;
  rating: number;
  views: number;
  reviews: number;
  amount: string;
}

export const mockTableData: CourseData[] = [
  {
    id: "1",
    name: "React Fundamentals",
    passed: "85%",
    rating: 4.8,
    views: 1250,
    reviews: 89,
    amount: "$99.00"
  },
  {
    id: "2",
    name: "Advanced TypeScript",
    passed: "92%",
    rating: 4.9,
    views: 890,
    reviews: 67,
    amount: "$149.00"
  },
  {
    id: "3",
    name: "Node.js Backend Development",
    passed: "78%",
    rating: 4.6,
    views: 2100,
    reviews: 134,
    amount: "$199.00"
  },
  {
    id: "4",
    name: "Database Design with PostgreSQL",
    passed: "88%",
    rating: 4.7,
    views: 756,
    reviews: 52,
    amount: "$129.00"
  },
  {
    id: "5",
    name: "Full-Stack Web Development",
    passed: "91%",
    rating: 4.9,
    views: 3420,
    reviews: 287,
    amount: "$299.00"
  },
  {
    id: "6",
    name: "UI/UX Design Principles",
    passed: "76%",
    rating: 4.5,
    views: 1680,
    reviews: 98,
    amount: "$89.00"
  },
  {
    id: "7",
    name: "DevOps and Deployment",
    passed: "83%",
    rating: 4.6,
    views: 934,
    reviews: 71,
    amount: "$179.00"
  },
  {
    id: "8",
    name: "Machine Learning Basics",
    passed: "69%",
    rating: 4.4,
    views: 2156,
    reviews: 156,
    amount: "$249.00"
  }
];