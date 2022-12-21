# while getopts u:a:f: flag
# do
#     case "${flag}" in
#         u) username=${OPTARG};;
#         a) age=${OPTARG};;
#         f) fullname=${OPTARG};;
#     esac
# done
# echo "Username: $username";
# echo "Age: $age";
# echo "Full Name: $fullname";

echo "Installing"
echo "Choose Host "
echo "1: Localhost on your computer "
echo "2: Run on docker"
read choice
if (($choice == "1")); then
    source "./run.sh"
    echo "Yes"
else
    source "./rundocker.sh"
    echo "NO"
fi

# source "./rundocker.sh"

# npm install
# echo "Installed Successfully";
# echo "Starting";
# npm run dev
