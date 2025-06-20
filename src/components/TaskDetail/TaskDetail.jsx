import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CardTask from '../CardTask';

const TaskDetail = ({ open, task, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Task Details</DialogTitle>
            <DialogContent>
                {task && (
                    <Box sx={{ width: '100%' }}>
                        <Typography variant="h6">Tên công việc: {task.title}</Typography>
                        <Typography variant="body1">Mô tả: {task.description}</Typography>
                        <Typography variant="subtitle1">Start Date: {new Date(task.start).toLocaleString()}</Typography>
                        <Typography variant="subtitle1">
                            End Date: {new Date(task?.extend_date ?? task.end).toLocaleString()}
                        </Typography>
                        <Typography variant="subtitle1">Status: {task.status.name}</Typography>
                        <Typography variant="subtitle1">Priority: {task.priority.name}</Typography>
                        <Typography variant="subtitle1">Danh sách công việc con:</Typography>
                        <Stack spacing={2}>
                            {task.subtasks.length > 0 ? (
                                task.subtasks.map((subtask) => <CardTask key={subtask._id} task={subtask} />)
                            ) : (
                                <Typography variant="body2">Không có công việc con.</Typography>
                            )}
                        </Stack>
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskDetail;
