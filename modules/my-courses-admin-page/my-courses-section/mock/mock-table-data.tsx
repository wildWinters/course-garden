
interface CourseData {
  id: number;
  name: string;
  passed: number;
  rating: number;
  views: number;
  reviews: number;
  amount: string;
}

export const mockTableData: CourseData[] = [
  {
    id: 1,
    name: "English grammar A1 course",
    passed: 3,
    rating: 4,
    views: 56,
    reviews: 9,
    amount: "$25.00",
  },
  {
    id: 2,
    name: "Foundations of Python for beginners",
    passed: 6,
    rating: 4,
    views: 46,
    reviews: 15,
    amount: "$45.00",
  },
  {
    id: 3,
    name: "Project management",
    passed: 8,
    rating: 4,
    views: 23,
    reviews: 7,
    amount: "$65.00",
  },
  {
    id: 4,
    name: "Financial literacy",
    passed: 9,
    rating: 4,
    views: 37,
    reviews: 10,
    amount: "$35.00",
  },
  {
    id: 5,
    name: "Data science",
    passed: 5,
    rating: 4,
    views: 18,
    reviews: 6,
    amount: "$85.00",
  },
  {
    id: 6,
    name: "Spanish grammar A2",
    passed: 9,
    rating: 4,
    views: 41,
    reviews: 8,
    amount: "$30.00",
  },
];