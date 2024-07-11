import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Photos = () => {
	return (
		<Card className="mb-2">
			<CardHeader>
				<CardTitle>Photos</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-4">
				<img
					src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Image"
					className="h-24 rounded-e-md"
				/>
				<Button variant="outline" className="col-start-1 col-end-3">
					See more
				</Button>
			</CardContent>
		</Card>
	);
};

export default Photos;
