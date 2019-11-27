//   public class Pov
//         {
//             private int[ , ] Orientation = { { 1, 0, 0 }, { 0, 1, 0 }, { 0, 0, 1 } };
//             private int[] Location = { 0, 0, 0 };

//             // Rotation matrices for each of the possible 90 degree rotations possible
//             private static int[,] Right = { { 0, -1, 0 }, { 1, 0, 0 }, { 0, 0, 1 } };
//             private static int[,] Left = { { 0, 1, 0 }, { -1, 0, 0 }, { 0, 0, 1 } };
//             private static int[,] Up = { { 0, 0, 1 }, { 0, 1, 0 }, { -1, 0, 0 } };
//             private static int[,] Down = { { 0, 0, -1 }, { 0, 1, 0 }, { 1, 0, 0 } };
//             private static int[,] TiltRight = { { 1, 0, 0 }, { 0, 0, 1 }, { 0, -1, 0 } };
//             private static int[,] TiltLeft = { { 1, 0, 0 }, { 0, 0, -1 }, { 0, 1, 0 } };

//             public Pov()
//             {
                
//             }

//             public void Look(ViewDirection direction)
//             {
//                 switch (direction)
//                 {
//                     case ViewDirection.Up:
//                         Orientation = MatrixMultiply(Orientation, Up);
//                         break;
//                     case ViewDirection.Down:
//                         Orientation = MatrixMultiply(Orientation, Down);
//                         break;
//                     case ViewDirection.TiltLeft:
//                         Orientation = MatrixMultiply(Orientation, TiltLeft);
//                         break;
//                     case ViewDirection.TiltRight:
//                         Orientation = MatrixMultiply(Orientation, TiltRight);
//                         break;
//                     case ViewDirection.TurnLeft:
//                         Orientation = MatrixMultiply(Orientation, Left);
//                         break;
//                     case ViewDirection.TurnRight:
//                         Orientation = MatrixMultiply(Orientation, Right);
//                         break;
//                     default:
//                         break;
//                 }
//             }

//             private int[,] MatrixMultiply(int[,] orientation, int[,] rotation)
//             {
//                 // Matrix multiplication code would follow (or use library method), but you can leave as a stub
//                 int[,] o = new int [3, 3];
//                 // more code here
//                 return o;
//             }

//             public void Move(MoveDirection direction)
//             {
//                 switch (direction)
//                 {
//                     case MoveDirection.Forward:
//                         Translate(Location, Orientation, 1);
//                         break;
//                     case MoveDirection.Back:
//                         Translate(Location, Orientation, -1);
//                         break;
//                     default:
//                         break;
//                 }
//             }

//             private int[] Translate(int[] location, int[,] orientation, int direction)
//             {
//                 // Adding/subtracting first column of orientation matrix to location based on direction would follow, but you can leave as a stub
//                 int[] loc = new int[3];
//                 // more code here
//                 return loc;
//             }
//         }