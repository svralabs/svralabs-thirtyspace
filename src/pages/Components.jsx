import React from 'react';

import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Spinner } from '../components/ui/spinner';
import { Progress } from '../components/ui/progress';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
import { Sidebar } from '../components/ui/sidebar';
import { NotFound } from '../components/ui/not-found';

const Components = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Component Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Buttons */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Buttons</h2>
          <div className="space-y-2">
            <button variant="primary">Primary</button>
            <button variant="secondary">Secondary</button>
            <button variant="ghost">Ghost</button>
            <button variant="destructive">Destructive</button>
          </div>
        </div>

        {/* Badges */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Badges</h2>
          <div className="space-y-2">
            <Badge variant="status" status="success">Success</Badge>
            <Badge variant="status" status="warning">Warning</Badge>
            <Badge variant="status" status="error">Error</Badge>
            <Badge variant="count">12</Badge>
          </div>
        </div>

        {/* Inputs */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Inputs</h2>
          <div className="space-y-4">
            <Input type="text" placeholder="Text Input" />
            <select className="w-full p-2 border rounded">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <Checkbox id="checkbox" />
            <RadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <label htmlFor="option1">Option 1</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <label htmlFor="option2">Option 2</label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Loaders */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Loaders</h2>
          <div className="space-y-4">
            <Spinner />
            <Progress value={50} />
          </div>
        </div>

        {/* Table */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Table</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Sidebar Preview */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Sidebar Preview</h2>
          <Sidebar />
        </div>

        {/* 404 */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">404</h2>
          <NotFound />
        </div>
      </div>
    </div>
  );
};

export default Components;
