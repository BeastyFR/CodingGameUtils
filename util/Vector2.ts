class Vector2
{
	x: number;
	y: number;

	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	toString(): string
	{
		return this.x + " " + this.y;
	}

	static distanceX(p1: Vector2, p2: Vector2): number
	{
		return Math.sqrt(Math.pow(p1.x - p2.x, 2));
	}

	static distanceY(p1: Vector2, p2: Vector2): number
	{
		return Math.sqrt(Math.pow(p1.y - p2.y, 2));
	}

	static distance(p1: Vector2, p2: Vector2): number
	{
		return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
	}

	static substract(p1: Vector2, p2: Vector2): Vector2
	{
		let result: Vector2 = new Vector2(p1.x, p2.x);
		result.substract(p2);
		return result;
	}

	substract(p2: Vector2): void
	{
		this.x = this.x - p2.x;
		this.y = this.y - p2.y;
	}

	static add(p1: Vector2, p2: Vector2): Vector2
	{
		let result: Vector2 = new Vector2(p1.x, p2.x);
		result.add(p2);
		return result;
	}

	add(p2: Vector2): void
	{
		this.x = this.x + p2.x;
		this.y = this.y + p2.y;
	}

	static divide(p1: Vector2, p2: Vector2): Vector2
	{
		let result: Vector2 = new Vector2(p1.x, p2.x);
		result.divide(p2);
		return result;
	}

	divide(p2: Vector2): void
	{
		this.x = this.x / p2.x;
		this.y = this.y / p2.y;
	}

	static multiply(p1: Vector2, p2: Vector2): Vector2
	{
		let result: Vector2 = new Vector2(p1.x, p2.x);
		result.multiply(p2);
		return result;
	}

	multiply(p2: Vector2): void
	{
		this.x = this.x * p2.x;
		this.y = this.y * p2.y;
	}

	length(): number
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	normalize(): void
	{
		let length = this.length();
		this.x = this.x / length;
		this.y = this.y / length;
	}

	scale(scalar): void
	{
		this.x = this.x * scalar;
		this.y = this.y * scalar;
	}

	round(): void
	{
		this.x = Math.round(this.x)
		this.y = Math.round(this.y);
	}

}
