import * as uuid from 'uuid';
import * as path from 'path';
import fs from 'fs';

class FileService {
	saveFile(file, type) {
		try {
			if (!fs.existsSync(path.resolve('userFiles', type))) {
				fs.mkdir(path.resolve('userFiles'), error => console.log(error));
				fs.mkdir(path.resolve('userFiles', type), error => console.log(error));
			}
			const filePath = path.resolve('userFiles', type, file.name);
			file.mv(filePath);
			return file.name;
		} catch (e) {
			console.log(e);
		}
	}
}

export default new FileService();
